document.addEventListener('DOMContentLoaded', () => {
  // 模块1: 创建音频上下文
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // 模块2: 播放音符的函数
  function playNote(note) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.value = note;
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1);
  }

  // 模块3: 获取所有的键元素
  const keys = document.querySelectorAll('.key');

  // 模块4: 音符频率映射
  const noteFrequencies = {
    'C4': 261.63,
    'C#4': 277.18,
    'D4': 293.66,
    'D#4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4': 369.99,
    'G4': 392.00,
    'G#4': 415.30,
    'A4': 440.00,
    'A#4': 466.16,
    'B4': 493.88
  };

  // 模块5: 为每个键添加点击事件监听器
  keys.forEach(key => {
    key.addEventListener('click', () => {
      const note = key.getAttribute('data-note');
      playNote(noteFrequencies[note]);
    });
  });

  // 模块6: 键盘按下事件监听器
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    keys.forEach(keyElement => {
      if (keyElement.getAttribute('data-key') === key) {
        const note = keyElement.getAttribute('data-note');
        playNote(noteFrequencies[note]);
        keyElement.classList.add('active');
      }
    });
  });

  // 模块7: 键盘释放事件监听器
  document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    keys.forEach(keyElement => {
      if (keyElement.getAttribute('data-key') === key) {
        keyElement.classList.remove('active');
      }
    });
  });
});