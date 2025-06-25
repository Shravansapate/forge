console.log("welcome to spotify");


let songIndex = 0;
// Use relative path instead of absolute path
let audioElement = new Audio('./song/song1.m4a');
let masterplay = document.getElementById('masterplay'); // Fixed typo in variable name
let myprogressBar = document.getElementById('myprogressBar');
let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.previous-btn');
let songItems = document.querySelectorAll('.songItem');
let currentSongImage = document.querySelector('.song-info img');
let currentSongName = document.querySelector('.song-name');
let songs=[
    
    {
        songName: "Song 1",
        filepath: "./song/song1.m4a",
        coverpath: "./cover/1.jpg"  // Fixed extension from .jgp to .jpg
    },
    
    {
        songName: "Song 2",
        filepath: "./song/song2.m4a",
        coverpath: "./cover/1.jpg"  // Fixed extension from .jgp to .jpg
    },
    {
        songName: "Song 3",
        filepath: "./song/song3.m4a",
        coverpath: "./cover/1.jpg"  // Fixed extension from .jgp to .jpg
    },
     {
        songName: "Song 4",
        filepath: "./song/song4.m4a",
        coverpath: "./cover/1.jpg"  // Fixed extension from .jgp to .jpg
    },
     {
        songName: "Song 5",
        filepath: "./song/song5.m4a",
        coverpath: "./cover/1.jpg"  // Fixed extension from .jgp to .jpg
    },
     {
        songName: "Song 6",
        filepath: "./song/song6.m4a",
        coverpath: "./cover/1.jpg"  // Fixed extension from .jgp to .jpg
    },
     {
        songName: "Song 7",
        filepath: "./song/song7.m4a",
        coverpath: "./cover/1.jpg"  // Fixed extension from .jgp to .jpg
    }
     
];     


function updateSongInfo(index) {
    audioElement.src = songs[index].filepath;
    currentSongImage.src = songs[index].coverpath;
    currentSongName.textContent = songs[index].songName;
    
    // Update active song in the list
    songItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}


//handle play/pause click
if (masterplay) {
    masterplay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.querySelector('img').src = 'pause.svg'; // Change play icon to pause
        } else {
            audioElement.pause();
            masterplay.querySelector('img').src = 'play.svg'; // Change pause icon to play
        }
    });
}

  
// ...existing code...

// Update the progress bar handling
if (myprogressBar) {
    audioElement.addEventListener('timeupdate', () => {
        // Calculate progress percentage
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        myprogressBar.value = progress;
        
        // Update time displays
        const currentTimeElement = document.querySelector('.current-time');
        const totalTimeElement = document.querySelector('.total-time');
        
        if (currentTimeElement && totalTimeElement) {
            currentTimeElement.textContent = formatTime(audioElement.currentTime);
            totalTimeElement.textContent = formatTime(audioElement.duration);
        }
    });

    myprogressBar.addEventListener('change', () => {
        const time = (myprogressBar.value * audioElement.duration) / 100;
        audioElement.currentTime = time;
    });
}

// Helper function to format time in MM:SS
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}


if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        songIndex = (songIndex + 1) % songs.length;
        updateSongInfo(songIndex);
        audioElement.play();
        masterplay.querySelector('img').src = 'pause.svg';
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        updateSongInfo(songIndex);
        audioElement.play();
        masterplay.querySelector('img').src = 'pause.svg';
    });
}


songItems.forEach((element, i) => {
    element.addEventListener('click', () => {
        songIndex = i;
        updateSongInfo(songIndex);
        audioElement.play();
        masterplay.querySelector('img').src = 'pause.svg';
    });
});



updateSongInfo(songIndex);