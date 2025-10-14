import React, { ReactNode, useEffect, useRef, useState } from "react";
import Loader from "../Loader/Loader";

interface ButtonData extends React.ComponentProps<"button"> {
  title: any;
  clickHandler: any;
  buttonType?: string;
  icon: any;
  onInit: () => Promise<void>;
}

function Button(props: ButtonData) {
  const { title, buttonType, clickHandler, icon, onInit, ...buttonProps } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [loader, setLoader] = useState<ReactNode>(
    <div>
      <Loader />
    </div>
  );
  
  // Применить ширину кнопки на индикатор загрузки
  function applyLoaderButtonWidth() {
    const buttonWidth =
      (buttonRef.current?.getBoundingClientRect().width ?? 40) - 40;
    console.log(buttonRef.current);
    const loaderElement = (
      <div style={{ width: buttonWidth + "px" }}>
        <Loader />
      </div>
    );
    setLoader(loaderElement);
  }

  // Запуск скрипта при инициализации
  async function initialize() {
    applyLoaderButtonWidth()

    // Если указан обработчик при инициализации
    if(onInit) {
      setIsLoading(true);
      await onInit()
      setIsLoading(false);
    }
  }

  useEffect(() => {
    initialize();
  }, [])


  const loadOnClick = async () => {
    setIsLoading(true);
    
    await clickHandler();
    setIsLoading(false);
  };

  const buttonContent = isLoading ? (
    loader
  ) : (
    <span style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
      {icon}
      {title}
    </span>
  );

  return (
    <button
      className={buttonType ? `button button_${buttonType}` : `button`}
      disabled={isLoading}
      onClick={loadOnClick}
      ref={buttonRef}
      {...buttonProps}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
