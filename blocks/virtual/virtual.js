import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
import { buildArticleFeedRow } from '../../scripts/app.js';

// function buildArticleFeedRow(){
//   const login = async (targetUrl) => {
//     try {
//       console.log("Logging in", targetUrl);
  
//       const options = {
//         authorizationParams: {
//           redirect_uri: window.location.origin
//         }
//       };
  
//       if (targetUrl) {
//         options.appState = { targetUrl };
//       }
  
//       await auth0Client.loginWithRedirect(options);
//     } catch (err) {
//       console.log("Log in failed", err);
//     }
//   };
// }

export default function decorate(block) {

  const wrapper = document.createElement('div');
  wrapper.className = 'load-more-wrapper';
  const loadMore = document.createElement('a');
  loadMore.className = 'load-more button small light';
  loadMore.href = '#';
  loadMore.textContent = 'Load More';
  wrapper.append(loadMore);
  // articleFeedEl.append(wrapper);
  loadMore.addEventListener('click', (event) => {
    event.preventDefault();
    // loadMore.remove();
    buildArticleFeedRow();
  });




  block.append(wrapper);
}

