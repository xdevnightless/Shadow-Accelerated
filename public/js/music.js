document.addEventListener("DOMContentLoaded", function () {

    const audioPlayer1 = document.getElementById("audioPlayer1");
  
    const playPauseButton1 = document.getElementById("playPauseButton1");
  
    const progressBar1 = document.querySelector(".progress"); 
  
    const currentTimeElement1 = document.getElementById("currentTime1");
  
    let isPlaying1 = false;
  
    function togglePlayPause1() {
  
      if (isPlaying1) {
  
        audioPlayer1.pause();
  
      } else {
  
        audioPlayer1.play();
  
      }
  
      isPlaying1 = !isPlaying1;
  
      playPauseButton1.textContent = isPlaying1 ? "❚❚" : "▶";
  
    }
  
    playPauseButton1.addEventListener("click", togglePlayPause1);
  
    audioPlayer1.addEventListener("play", function () {
  
      isPlaying1 = true;
  
      playPauseButton1.textContent = "❚❚";
  
    });
  
    audioPlayer1.addEventListener("pause", function () {
  
      isPlaying1 = false;
  
      playPauseButton1.textContent = "▶";
  
    });
  
    audioPlayer1.addEventListener("timeupdate", function () {
  
      const progress = (audioPlayer1.currentTime / audioPlayer1.duration) * 100;
  
      progressBar1.style.width = progress + "%";
  
      updateTimestamp1();
  
    });
  
    audioPlayer1.addEventListener("loadedmetadata", function () {
  
      updateTimestamp1();
  
    });
  
    function updateTimestamp1() {
  
      const currentMinutes = Math.floor(audioPlayer1.currentTime / 60);
  
      const currentSeconds = Math.floor(audioPlayer1.currentTime - currentMinutes * 60);
  
      const durationMinutes = Math.floor(audioPlayer1.duration / 60);
  
      const durationSeconds = Math.floor(audioPlayer1.duration - durationMinutes * 60);
  
      currentTimeElement1.textContent = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}/${durationMinutes}:${durationSeconds < 10 ? "0" : ""}${durationSeconds}`;
  
    }
  
  });
  
  document.addEventListener("DOMContentLoaded", function () {
  
    const audioPlayer2 = document.getElementById("audioPlayer2");
  
    const playPauseButton2 = document.getElementById("playPauseButton2");
  
    const progressBar2 = document.querySelector(".progress"); 
  
    const currentTimeElement2 = document.getElementById("currentTime2");
  
    let isPlaying2 = false;
  
    function togglePlayPause2() {
  
      if (isPlaying2) {
  
        audioPlayer2.pause();
  
      } else {
  
        audioPlayer2.play();
  
      }
  
      isPlaying2 = !isPlaying2;
  
      playPauseButton2.textContent = isPlaying2 ? "❚❚" : "▶";
  
    }
  
    playPauseButton2.addEventListener("click", togglePlayPause2);
  
    audioPlayer2.addEventListener("play", function () {
  
      isPlaying2 = true;
  
      playPauseButton2.textContent = "❚❚";
  
    });
  
    audioPlayer2.addEventListener("pause", function () {
  
      isPlaying2 = false;
  
      playPauseButton2.textContent = "▶";
  
    });
  
    audioPlayer2.addEventListener("timeupdate", function () {
  
      const progress = (audioPlayer2.currentTime / audioPlayer2.duration) * 100;
  
      progressBar2.style.width = progress + "%";
  
      updateTimestamp2();
        });
  
        audioPlayer2.addEventListener("loadedmetadata", function () {
  
          updateTimestamp2();
  
        });
  
        function updateTimestamp2() {
  
          const currentMinutes = Math.floor(audioPlayer2.currentTime / 60);
  
          const currentSeconds = Math.floor(audioPlayer2.currentTime - currentMinutes * 60);
  
          const durationMinutes = Math.floor(audioPlayer2.duration / 60);
  
          const durationSeconds = Math.floor(audioPlayer2.duration - durationMinutes * 60);
  
          currentTimeElement2.textContent = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}/${durationMinutes}:${durationSeconds < 10 ? "0" : ""}${durationSeconds}`;
  
        }
  
      });
  
      document.addEventListener("DOMContentLoaded", function () {
  
        const audioPlayer3 = document.getElementById("audioPlayer3");
  
        const playPauseButton3 = document.getElementById("playPauseButton3");
  
        const progressBar3 = document.querySelector(".progress"); 
  
        const currentTimeElement3 = document.getElementById("currentTime3");
  
        let isPlaying3 = false;
  
        function togglePlayPause3() {
  
          if (isPlaying3) {
  
            audioPlayer3.pause();
  
          } else {
  
            audioPlayer3.play();
  
          }
  
          isPlaying3 = !isPlaying3;
  
          playPauseButton3.textContent = isPlaying3 ? "❚❚" : "▶";
  
        }
  
        playPauseButton3.addEventListener("click", togglePlayPause3);
  
        audioPlayer3.addEventListener("play", function () {
  
          isPlaying3 = true;
  
          playPauseButton3.textContent = "❚❚";
  
        });
  
        audioPlayer3.addEventListener("pause", function () {
  
          isPlaying3 = false;
  
          playPauseButton3.textContent = "▶";
  
        });
  
        audioPlayer3.addEventListener("timeupdate", function () {
  
          const progress = (audioPlayer3.currentTime / audioPlayer3.duration) * 100;
  
          progressBar3.style.width = progress + "%";
  
          updateTimestamp3();
  
        });
  
        audioPlayer3.addEventListener("loadedmetadata", function () {
  
          updateTimestamp3();
  
        });
  
        function updateTimestamp3() {
  
          const currentMinutes = Math.floor(audioPlayer3.currentTime / 60);
  
          const currentSeconds = Math.floor(audioPlayer3.currentTime - currentMinutes * 60);
  
          const durationMinutes = Math.floor(audioPlayer3.duration / 60);
  
          const durationSeconds = Math.floor(audioPlayer3.duration - durationMinutes * 60);
  
          currentTimeElement3.textContent = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}/${durationMinutes}:${durationSeconds < 10 ? "0" : ""}${durationSeconds}`;
  
        }
  
      });