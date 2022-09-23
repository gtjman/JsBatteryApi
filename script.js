navigator.getBattery().then((battery) => {
  document.getElementById("data").innerText = `${battery.level * 100}%`
  battery.addEventListener("chargingchange", () => {
    if(battery.charging) {
        chargerConnected();
    } else {
        chargerDisconnected();
    };
  });
  battery.addEventListener("levelchange", () => {
    document.getElementById("data").innerText = `${battery.level * 100}%`
  });
  function chargerDisconnected() {
    alert("charger disconnected")
  };
  function chargerConnected() {
    alert("charger connected")
  };
});