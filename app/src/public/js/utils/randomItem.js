// 주어진 배열에서 요소 1개를 랜덤하게 골라 반환하는 함수
export default function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}
