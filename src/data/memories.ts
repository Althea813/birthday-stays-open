export type MemoryKind = 'frames' | 'calls' | 'film' | 'together' | 'portraits' | 'cats' | 'sunny' | 'magic' | 'books' | 'calendar' | 'tv' | 'elephant';
export interface Memory { id:string; episode:string; category:MemoryKind; carrier:'frame'|'polaroid'|'filmstrip'|'contact-sheet'|'tv'; asset:string; alt:string; backText:string; priority:number; }
export const episodeTitles:Record<MemoryKind,string>={frames:'我们的合照',calls:'喂？',film:'小小日常',together:'一起加油',portraits:'两个人的依偎',cats:'many cats',sunny:'今天有太阳',magic:'一点魔法',books:'小屋书架',calendar:'今天与明天',tv:'涂鸦放映',elephant:'币币'};
const gallery:[string,MemoryKind,string,string][]=[
 ['01-tree-friends','frames','海洋馆里的合影','脸蛋都蓝蓝的。'],
 ['02-sofa-friends','frames','泥膜二人组','两个小捣蛋鬼。'],
 ['03-cafe-friends','together','我是监考老师！','忙碌的一天。'],
 ['04-picnic','together','啊！下雨啦！','不哭不哭小宝。'],
 ['05-seaside','portraits','秋日里的依偎','温度刚刚好。'],
 ['06-reading','portraits','合照合照，不学习','下一秒：我要录演示视频。'],
 ['07-jump','portraits','杭杭摄影师巨作','出片出片。'],
 ['08-tulips','film','好喝吗？咦，好甜','你拍照，我也要入境。'],
 ['09-orange-cat','cats','噘嘴嘴，亲亲亲','滑滑的肉肉好好摸。'],
 ['10-many-cats','cats','两只挤在一起的歪歪猫','已被萌哭。'],
 ['11-magic-room','magic','傍晚的云大山上，好漂酿','今天肯定要和宝宝记录一下。'],
 ['12-cake','sunny','点着蜡烛的小蛋糕','不用等特别的日子，今天就很好。'],
];
export const memories:Memory[]=gallery.map(([file,category,alt,backText],i)=>({id:`doodle-${i+1}`,episode:episodeTitles[category],category,carrier:category==='frames'?'frame':'polaroid',asset:`./memories/${file}.webp`,alt,backText,priority:5}));
export const photo=(index:number)=>memories[((index-1)%memories.length+memories.length)%memories.length];
export {albums} from './photo-collections';
export const callFragments=[
 {time:'叮铃 01',line:'喂？这里是发呆热线。',aside:''},
 {time:'叮铃 02',line:'今天的云，看起来像一块吐司。',aside:''},
 {time:'叮铃 03',line:'币币说它正在忙。\n忙着什么也不做。',aside:''},
 {time:'叮铃 04',line:'热水烧好了。\n给自己倒一杯吧。',aside:''},
 {time:'叮铃 05',line:'如果暂时没主意，\n就先看看窗外。',aside:''},
 {time:'叮铃 06',line:'小屋收到。\n你的愿望正在发芽。',aside:''},
 {time:'叮铃 07',line:'好啦，去摸摸币币。\n她在等你。',aside:''},
];
export const birthdayLetter=[
 '给走进小屋的杭杭：',
 '你可以把晴天留久一点，也可以让窗外下一场小雪。想说话的时候，拨一下电话；不想说话的时候，和我一起坐着也很好。',
 '抽屉里的星星偶尔会逃跑，咖啡可能有点凉，书页里还夹着没读完的故事。每件小东西，都愿意陪你慢慢发现。',
 '愿你接下来的日子有好睡眠、有好胃口，有想做的小事，也有什么都不做的自由。我一直都在你身边。',
 '愿望已经听到了。今天也请对自己好一点。',
 '下次来，小屋的灯还会为你亮着。',
];
