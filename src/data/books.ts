export const shelfBooks = [
  { id: 'hp1', title: '哈利·波特与魔法石', spine: '魔法石', author: 'J. K. 罗琳', volume: 'I', color: '#60432e', family: 'magic', note: '故事开始的地方。' },
  { id: 'hp2', title: '哈利·波特与密室', spine: '密室', author: 'J. K. 罗琳', volume: 'II', color: '#354b42', family: 'magic', note: '有些秘密，是写在书里的。' },
  { id: 'hp3', title: '哈利·波特与阿兹卡班的囚徒', spine: '阿兹卡班的囚徒', author: 'J. K. 罗琳', volume: 'III', color: '#3d4551', family: 'magic', note: '如果有时间转换器，想再回哪一天？' },
  { id: 'hp4', title: '哈利·波特与火焰杯', spine: '火焰杯', author: 'J. K. 罗琳', volume: 'IV', color: '#6b3b33', family: 'magic', note: '有些冒险，要和朋友一起。' },
  { id: 'hp5', title: '哈利·波特与凤凰社', spine: '凤凰社', author: 'J. K. 罗琳', volume: 'V', color: '#665a39', family: 'magic', note: '愿你总能找到站在你身边的人。' },
  { id: 'hp6', title: '哈利·波特与混血王子', spine: '混血王子', author: 'J. K. 罗琳', volume: 'VI', color: '#3d5148', family: 'magic', note: '你看，书页里也会藏着别人的字。' },
  { id: 'hp7', title: '哈利·波特与死亡圣器', spine: '死亡圣器', author: 'J. K. 罗琳', volume: 'VII', color: '#5a4539', family: 'magic', note: '故事读完了，魔法还在。' },
  { id: 'second-sex', title: '傲慢与偏见', spine: '傲慢与偏见', author: '简·奥斯汀', volume: '', color: '#654438', family: 'thought', note: '慢慢读，也慢慢认识自己。' },
  { id: 'misogyny', title: '追风筝的人', spine: '追风筝的人', author: '卡勒德·胡赛尼', volume: '', color: '#4a5040', family: 'thought', note: '有些问题，值得多翻几页。' },
  { id: 'feminism', title: '小王子', spine: '小王子', author: '安托万·德·圣埃克苏佩里', volume: '', color: '#866746', family: 'thought', note: '从一页开始，也很好。' },
] as const;
export type ShelfBook = typeof shelfBooks[number];
