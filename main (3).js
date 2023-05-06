function sstartClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/h2tCWMWcl/model.json", som)



}
function som () {
  console.log("Proyecto generado");
  classifier.classify(casa);
  }
  function casa (error,results){

    if(error){console.error(error)} 
    else{
      console.log(results);
    document.getElementById("result_label").innerHTML="Escucho "+
    results[0].label;
    document.getElementById("result_confidence").innerHTML="La precision que tengo es"+
    results[0].confidence*100;
    container=document.getElementById("aliens1");
    container2=document.getElementById("aliens2");
    container3=document.getElementById("aliens3");
    container4=document.getElementById("aliens4");
    if(results[0].label=="Alexa"){
      container.src="aliens-01.gif";
      container2.src="aliens-02.png";
      container3.src="aliens-03.png";
      container4.src="aliens-04.png";
    
    }
    if(results[0].label=="Background Noise"){
      container.src="aliens-01.png";
      container2.src="aliens-02.gif";
      container3.src="aliens-03.png";
      container4.src="aliens-04.png";
    }
    if(results[0].label=="Lapiz cayendo"){
      container.src="aliens-01.png";
      container2.src="aliens-02.png";
      container3.src="aliens-03.gif";
      container4.src="aliens-04.png";
    }
    if(results[0].label=="alcanzia"){
      container.src="aliens-01.png";
      container2.src="aliens-02.png";
      container3.src="aliens-03.png";
      container4.src="aliens-04.gif";
    }
}}