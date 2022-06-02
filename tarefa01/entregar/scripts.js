// busco na api, que me devolve um json, logo salvo em um data
async function getData() {
  const apiResponse = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await apiResponse.json();
  return data;
}

async function getData1() {
  const apiResponse1 = await fetch("https://api.chucknorris.io/jokes/random");
  const data1 = await apiResponse1.json();
  return data1;
}

async function getData2() {
  const apiResponse2 = await fetch("https://api.chucknorris.io/jokes/random");
  const data2 = await apiResponse2.json();
  return data2;
}

async function getData3() {
  const apiResponse3 = await fetch("https://api.chucknorris.io/jokes/random");
  const data3 = await apiResponse3.json();
  return data3;
}

async function getData4() {
  const apiResponse4 = await fetch("https://api.chucknorris.io/jokes/random");
  const data4 = await apiResponse4.json();
  return data4;
}

// busco no data oq foi pego no json "id" é a "frase"

function setData(data) {
  const dataId = document.getElementById("id");
  const dataPhrase = document.getElementById("phrase");
  dataId.append(data.id)
  dataPhrase.append(data.value)
}

function setData1(data1) {
  const dataId1 = document.getElementById("id1");
  const dataPhrase1 = document.getElementById("phrase1");
  dataId1.append(data1.id)
  dataPhrase1.append(data1.value)
}

function setData2(data2) {
  const dataId2 = document.getElementById("id2");
  const dataPhrase2 = document.getElementById("phrase2");
  dataId2.append(data2.id)
  dataPhrase2.append(data2.value)
}

function setData3(data3) {
  const dataId3 = document.getElementById("id3");
  const dataPhrase3 = document.getElementById("phrase3");
  dataId3.append(data3.id)
  dataPhrase3.append(data3.value)
}

function setData4(data4) {
  const dataId4 = document.getElementById("id4");
  const dataPhrase4 = document.getElementById("phrase4");
  dataId4.append(data4.id)
  dataPhrase4.append(data4.value)
}


// geter e seters

async function main() {
  const data = await getData();
  const data1 = await getData1();
  const data2 = await getData2();
  const data3 = await getData3();
  const data4 = await getData4();
  setData(data);
  setData1(data1);
  setData2(data2);
  setData3(data3);
  setData4(data4);
}
main();

