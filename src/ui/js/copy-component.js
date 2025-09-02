const uiComponent = document.querySelector('.ui-component');
const copyButton = uiComponent.querySelector('.copy-component');

// 함수 구현부
function copyComponentMarkup() {
  // 버튼을 제외한 마크업 선택
  const markupElements = Array.from(uiComponent.children).filter((el) => !el.classList.contains('copy-component'));
  // 마크업 코드 추출
  const markup = markupElements.map((el) => el.outerHTML).join('\n');
  // 클립보드에 복사
  navigator.clipboard.writeText(markup).then(() => {
    copyButton.textContent = '복사됨!';
    setTimeout(() => (copyButton.textContent = '복사'), 1000);
  });
}

// 이벤트 바인딩 영역
copyButton.addEventListener('click', copyComponentMarkup);
