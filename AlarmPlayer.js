import { Audio } from 'expo-av';

const alarmSound = new Audio.Sound();

async function playAlarm() {
  try {
    await alarmSound.loadAsync(require('./assets/des_irae.mp3'));
    await alarmSound.playAsync();
  } catch (error) {
    console.error('Failed to play alarm sound', error);
  }
}

export { playAlarm };
