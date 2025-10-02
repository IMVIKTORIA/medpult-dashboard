export interface GroupMockData {
  groupId: string;
  groupName: string;
}

// Массивы с возможными элементами имени группы
const adjectives: string[] = ['Быстрая', 'Яркая', 'Красивая', 'Умная', 'Свободная'];
const nouns: string[] = ['Звезда', 'Волна', 'Свет', 'Планета', 'Энергия'];

export function generateGroupsMock(n: number): GroupMockData[] {
  const groups: GroupMockData[] = [];

  for (let i = 0; i < n; i++) {
    // Генерируем уникальный ID группы
    const groupId = 'group-' + Math.random().toString(36).substr(2, 9);
    
    // Случайно выбираем прилагательное и существительное
    const adjIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);
    
    // Формируем полное название группы
    const groupName = `${adjectives[adjIndex]} ${nouns[nounIndex]}`;

    groups.push({ groupId, groupName });
  }

  return groups;
}