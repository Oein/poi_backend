const foods = [
  "사과",
  "라면",
  "초밥",
  "와규",
  "소고기",
  "돼지고기",
  "닭고기",
  "달걀",
  "빵",
  "마늘빵",
  "바게트",
  "크림빵",
  "핫도그",
  "치즈버거",
  "햄버거",
  "불고기버거",
  "대리버거",
  "치킨버거",
  "짜장면",
  "짬뽕",
  "피자",
  "치킨",
  "김치",
  "돈가스",
  "떡볶이",
  "옥수수",
  "김밥",
  "기름",
  "레몬",
  "고기",
  "닭죽",
  "전복죽",
  "팥죽",
  "호박죽",
  "닭국수",
  "고기국수",
  "메밀국수",
  "막국수",
  "비빔국수",
  "잔치국수",
  "칼국수",
  "콩국수",
  "물냉면",
  "비빔냉면",
  "평양냉면",
  "간짜장",
  "사천짜장",
  "볶음짬뽕",
  "잡채",
  "우동",
  "울면",
  "신라면",
  "진라면",
  "진순",
  "진매",
  "가래떡",
  "개떡",
  "메밀떡",
  "백설기",
  "비지떡",
  "송편",
  "술떡",
  "시루떡",
  "오메기떡",
  "인절미",
  "무지개떡",
  "우매기",
  "호떡",
  "화전",
  "진라면순한맛",
  "불닭볶음면",
  "치즈돈까스",
  "참치회",
  "연어회",
  "광어회",
  "방어회",
  "호박엿",
  "엿",
  "물냉면",
  "비빔냉면",
  "잡채",
  "연어초밥",
  "연어뱃살초밥",
  "연어알군함",
  "광어초밥",
  "광어뱃살초밥",
  "광어묵은지초밥",
  "날치초밥",
  "날치알군함",
  "도토리묵",
  "배추김치",
  "상추",
  "오리백숙",
  "순댓국",
  "수제비",
  "콩나물국",
  "갈비탕",
  "감자탕",
  "닭곰탕",
  "육개장",
  "동태찌개",
  "장조림",
  "약과",
  "계란빵",
  "매실주",
];
// (Modi + F)로 이미 있는 단어인지 확인 하고 만드셈들
// 물론 중복 제거 기능이 있긴 한데 CPU 사용하니까 ;;
// 띄어쓰기 X
// 맞춤법 체크 하셈
// 느금마 같은거 넣지 마셈

let gx = foods.filter((v) => v.indexOf(" ") == -1);
let gxy = gx.filter((element, index) => {
  return gx.indexOf(element) === index;
});

exports.default = gxy;
