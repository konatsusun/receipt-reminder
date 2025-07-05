function onScanSuccess(decodedText, decodedResult) {
  alert("読み取った内容：" + decodedText);
  // ここで保存処理や画面表示もできるよ！
}

function startScanner() {
  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode.start(
    { facingMode: "environment" }, // 背面カメラを使う
    {
      fps: 10,
      qrbox: 250
    },
    onScanSuccess
  ).catch(err => {
    console.error("QR読み取りエラー:", err);
  });
}

document.getElementById("scanBtn").addEventListener("click", startScanner);
