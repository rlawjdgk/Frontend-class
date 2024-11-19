// 퀵 정렬
// let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];
// let arr = [4, 3, 1, 2, 5, 6, 9, 7, 8];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 공통정의:
// 배열: 9개의 숫자 아이템을 가지고 있는 자료구조
// 배열의 0번째 인덱스: 5 (*left)
// 배열 8번째 인덱스: 8 (*right)

// pivot: 기준값 => 배열 0번째 인덱스
// 비교값: pivot값을 제외한 나머지 배열 내 아이템
// 비교값 내 첫번째 인덱스: leftStartIndex = 3
// 비교값 내 마지막 인덱스: leftStartIndex = 8

// 규칙
// leftStartIndex 오른쪽으로 한칸씩 이동, pivot보다 큰 숫자를 만나면 멈춤
// rightStartIndex 왼쪽으로 한칸씩 이동, pivot보다 작은 숫자를 만나면 멈춤
// 위에 두 인덱스 값이 조건에 충족되서 이동을 멈추게 되면, 두 숫자를 swap
// leftStartIndex와 rightStartIndex가 서로 교차 되는 시점이 오면, rightStartIndex와 pivot의 값을 swap

let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8]; // 정렬할 배열

// 배열 내 두 값을 교환하는 함수
const swap = (arr, index1, index2) => {
  let temp = arr[index1]; // 첫 번째 값을 임시 변수에 저장
  arr[index1] = arr[index2]; // 두 번째 값을 첫 번째 위치로 교환
  arr[index2] = temp; // 임시 변수에 저장한 첫 번째 값을 두 번째 위치로 교환
};

// 배열을 나누는 divide 함수
const divide = (arr, left, right) => {
  let pivot = arr[left]; // 기준값(pivot)을 배열의 왼쪽 첫 번째 값으로 설정
  let leftStartIndex = left + 1; // 왼쪽에서 시작 인덱스는 pivot 바로 오른쪽
  let rightStartIndex = right; // 오른쪽에서 시작 인덱스는 배열 끝

  // leftStartIndex와 rightStartIndex가 교차할 때까지 반복
  while (leftStartIndex <= rightStartIndex) {
    // 왼쪽에서 pivot보다 큰 값을 찾을 때까지 오른쪽으로 이동
    while (leftStartIndex <= right && arr[leftStartIndex] <= pivot) {
      leftStartIndex++;
    }
    // 오른쪽에서 pivot보다 작은 값을 찾을 때까지 왼쪽으로 이동
    while (rightStartIndex >= left + 1 && arr[rightStartIndex] >= pivot) {
      rightStartIndex--;
    }
    // 조건에 맞는 두 값을 찾으면 서로 교환
    if (leftStartIndex < rightStartIndex) {
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }

  // pivot을 올바른 위치로 이동 (교차 지점에서)
  swap(arr, left, rightStartIndex);

  return rightStartIndex; // 기준값(pivot)의 최종 위치 반환
};

// 퀵 정렬 함수
const quickSort = (arr, left, right) => {
  if (left < right) {
    // 왼쪽 인덱스가 오른쪽 인덱스보다 작은 경우
    let pivot = divide(arr, left, right); // 기준값(pivot)의 위치를 찾고
    quickSort(arr, left, pivot - 1); // 기준값 왼쪽 부분을 정렬
    quickSort(arr, pivot + 1, right); // 기준값 오른쪽 부분을 정렬
  }
};

console.log("==== 정렬 전 ====");
console.log(arr); // 정렬 전 배열 출력

quickSort(arr, 0, arr.length - 1); // 퀵 정렬 실행

console.log("==== 정렬 후 ====");
console.log(arr); // 정렬 후 배열 출력
