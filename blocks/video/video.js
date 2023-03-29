function decorateVideoBlock($block, videoURL) {
  if (videoURL.endsWith('.mp4')) {
    let attrs = '';
    attrs = 'playsinline controls';
    if ($block.classList.contains('autoplay')) attrs = '';
    $block.innerHTML = /* html */`
      <div class="vid-wrapper">
        <video controls muted autoplay loop name="media"><source src="${videoURL}" type="video/mp4"></video>
      </div>
      `;
  }
}

export default function decorate($block) {
  const $a = $block.querySelector('a');
  const videoURL = $a.href;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        decorateVideoBlock($block, videoURL);
      }
    });
  });
  observer.observe($block);
}
