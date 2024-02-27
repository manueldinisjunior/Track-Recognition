// SongRecognitionScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function SongRecognitionScreen() {
  const [recording, setRecording] = useState(null);

  async function startRecording() {
    try {
      const { recording } = await Audio.Recording.createAsync({
        quality: Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
        ios: {
          extension: '.m4a',
          outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
        },
      });
      setRecording(recording);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  }

  async function stopRecording() {
    if (recording) {
      await recording.stopAndUnloadAsync();
      // Send the recording to your backend for recognition
      // Handle the response (song details) here
    }
  }

  return (
    <View>
      <Text>Song Recognition App</Text>
      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} />
    </View>
  );
}
