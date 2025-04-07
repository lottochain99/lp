const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const style = document.createElement('style');
style.innerHTML = `body{margin:0;height:100vh;background:#000;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden;font-family:'Ubuntu',sans-serif}h1{font-size:64px;font-weight:700;background:linear-gradient(90deg,#03a9f4,#f441a5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:4px;text-align:center;position:relative;animation:glow 3s ease-in-out infinite}h1::before{content:'Coming Soon';position:absolute;top:0;left:0;z-index:-1;font-size:64px;font-weight:700;font-family:'Ubuntu',sans-serif;color:transparent;-webkit-text-stroke:2px #03a9f4}@keyframes glow{0%,100%{text-shadow:0 0 10px rgba(3,169,244,0.5),0 0 20px rgba(244,65,165,0.5),0 0 40px rgba(244,65,165,0.5)}50%{text-shadow:0 0 20px rgba(3,169,244,0.8),0 0 40px rgba(244,65,165,0.8),0 0 60px rgba(244,65,165,0.8)}}.button{margin-top:40px;padding:12px 30px;border:2px solid #03a9f4;color:#03a9f4;background:transparent;font-size:16px;font-weight:bold;border-radius:30px;text-decoration:none;transition:all 0.3s ease;box-shadow:0 0 10px #03a9f4}.button:hover{background:#03a9f4;color:#000;box-shadow:0 0 20px #03a9f4}`;
document.head.appendChild(style);
