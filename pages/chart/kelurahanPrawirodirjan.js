new Chart(document.getElementById("kelurahanPrawirodirjan"), {
    type: 'bar',
    data: {
      labels: ["Keteraturan Bgn", "Bgn teknis", "Kondisi Atap, dinding, lantai", "Jln layak", "Jln sesuai teknis", "Kawasan tidak banjir", "Jaringan drainase memadai", "Terlayani air", "Kebutuhan air","Aksesk jamban", "Jamban teknis","Pemisahan sal. limbah dan drainase","Sampah ke TPS","Sapras kebakaran","Hunian ber-IMB","Lahan ber-surat"],
      datasets: [
        {
          label: "Dalam persen( )",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#d6cbd3","#eca1a6","#bdcebe","#ada397","#80ced6","#f18973","#f4e1d2","#c8c3cc","#87bdd8","#eeac99","#e06377"],
          data: [54 ,74 ,90 ,59 ,39 ,100 ,70 ,63 ,100 ,78 ,77 ,31 ,88 ,19 ,16 ,77  ]
		}  
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Kelurahan Prawirodirjan'
      }
    }
});