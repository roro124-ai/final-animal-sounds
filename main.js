function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Jkzwy-Cw3/model.json', model_ready)


}

function model_ready() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);

        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_lable_dog").innerHTML="Detecting voice of- "+results[0].label;
        document.getElementById("result_lable_cat").innerHTML="Detecting voice of- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";

       

        img=document.getElementById("dog.image.jpg");
        img1=document.getElementById("3683.jpg");
        

        

    }
}