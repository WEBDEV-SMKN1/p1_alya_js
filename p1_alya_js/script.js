function editBiodata() {
  document.getElementById('nama').innerHTML = 'Nama: <input type="text" id="namabaru" value="Himmatul Aliyah">';
  document.getElementById('umur').innerHTML = 'Umur: <input type="number" id="umurbaru" value="17 Tahun">';
  document.getElementById('alamat').innerHTML = 'Alamat: <input type="text" id="alamatbaru" value="Jl. Sidogiri No. 6, Kota Pasuruan">';
  document.querySelector('button').innerHTML = 'Simpan Biodata';
  document.querySelector('button').onclick = saveBiodata;
}

function saveBiodata() {
  const namabaru = document.getElementById('namabaru').value;
  const umurbaru = document.getElementById('umurbaru').value;
  const alamatbaru = document.getElementById('alamatbaru').value;


  

  document.getElementById('nama').innerText = `Nama: ${namabaru}`;
  document.getElementById('umur').innerText = `Umur: ${umurbaru} tahun`;
  document.getElementById('alamat').innerText = `Alamat: ${alamatbaru}`;

  document.querySelector('button').innerText = 'Edit Biodata';
  document.querySelector('button').onclick = editBiodata;
}

window.addEventListener('DOMContentLoaded',async ()=>{

  const request = await fetch('https://api.artic.edu/api/v1/artworks/search?q=cats')
  const cats = await request.json()
console.log(cats.data)
  // const kota = [
  //   {nama:"pasuruan",provinsi:"jawa timur"},
  //   {nama:"pasuruan 1",provinsi:"jawa timur"},
  //   {nama:"pasuruan 22",provinsi:"jawa tengah"}
  // ]

  const cari = document.createElement('input')
  const hasilcari = document.createElement('ul')
  cari.type = 'text'
  console.log(document.querySelector('body'))
  document.querySelector('body').appendChild(cari)
  document.querySelector('body').appendChild(hasilcari)

  cari.addEventListener('input',(e)=>{
    let nama = cats.data.filter(a=>{
      if(a.title.toLowerCase().includes(e.target.value.toLowerCase())){
        return a
      }
    })
    nama = nama.sort((a,b)=>{
      return a.title.charCodeAt(0)-b.title.charCodeAt(0) 
    })
    const hasil = nama.map((e)=>{
      return `<li><img src="${e.thumbnail.lqip}" width="400px" height="400px">${e.title}</li>`
    })

    hasilcari.innerHTML = hasil
  })  
  
})