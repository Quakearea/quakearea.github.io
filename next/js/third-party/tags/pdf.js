<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\butterfly\css\APlayer.min.css"><script src="\butterfly\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\butterfly\js\Meting.min.js"></script>/* global NexT, CONFIG, PDFObject */

document.addEventListener('page:loaded', () => {
  if (document.querySelectorAll('.pdf-container').length) {
    NexT.utils.getScript(CONFIG.pdf.object_url, {
      condition: window.PDFObject
    }).then(() => {
      document.querySelectorAll('.pdf-container').forEach(element => {
        PDFObject.embed(element.dataset.target, element, {
          pdfOpenParams: {
            navpanes : 0,
            toolbar  : 0,
            statusbar: 0,
            pagemode : 'thumbs',
            view     : 'FitH'
          },
          PDFJS_URL: CONFIG.pdf.url,
          height   : element.dataset.height
        });
      });
    });
  }
});
