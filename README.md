# Project Name
Epicodus TR-909 Drum Machine

## By
Sami Al-Jamal
Adam Luchini
Brian H Grant
Bo Zhao

## Description
The Epicodus TR-909 Drum Machine is a rhythm composer capable of looping 5 percussion noises (high hat, bass, snare, bongo, and cymbal). After loading the page, the user can select where in the measure to play a sample on the 5x8 grid. After the user inputs their desired percussion composition, the beats per minute (BPM) field is filled with a numeric input between 60-6000 and the "start" button is pressed. Voila! The sample loops until the user clicks the "stop" button. The existing loop can be modified, or, if the user wishes, the "clear" button can be clicked and the grid resets.

## Specifications
The capabilities of the Epicodus TRcd d-909 are as follows:
* Plays back any number of percussion samples on the same beat.
  * Example: If the first and fifth columns contain a selection of "bass", "snare", and "cymbal", the three active samples will play in unison on the first and fifth beats of the loop.
* Each grid button is responsive while the loop is stopped.
  * Example: The user initially selects "bass", "snare", and "bongo" to play on the column 3 beat. They then decide to remove "bongo" and add "high-hat" for that beat. To do this, they would simply click the actively blue "bongo" button to deactivate play and turn it white. The "high-hat" would then be activated and turn blue by clicking the its white square in that column.
* Treats unselected grid buttons as silent beats for each instrument.
  * Example: If columns 1, 2, 3, 5, 6, 7, 8 are selected for the "snare", it will loop back a rhythm that plays "snare" on beats 1 through 3, be absent of "snare" on beat 4, and resume "snare" on beats 5 through 8.
* Displays a visual representation of beat location during loops.
  * Example: As a loop is playing with "bongo" selected on columns 2 and 6, the blue box selection will turn grey for the duration of the first "bongo" strike and again on the second. If "cymbal" and "bass" are selected on columns 4 and 5, their blue boxes will turn grey for those beats as "bongo", which isn't in use for those two beats, remains unchanged at white.
* Tempo of the loop can be manipulated.
  * Example: After selecting which instruments to play in which beat column, the user inputs "350" in the BPM field and hits "Start" to listen to the loop at 350 BPM. After stopping the loop using the "stop" button, the user changes the BPM value to a faster tempo of 1000, and initiates the loop again to hear it played at 1,000 BPM.
* Each percussion noise can be tested before placement in a measure column. If the user wants to have a solo jam session with the percussion instruments and not use the loop function, keyboard keys "Q", "W," "E", "R", and "T" are responsive to "high-hat", "bass", "snare", "bongo", and "cymbal", "respectively".  Clicking the button of each instrument name plays the desired instrument, too.
  * Example: Whether a loop is playing or not, striking the "R" "W" keys and clicking the "cymbal" button will play the "bongo", "bass", and "cymbal" noises.


## Installation
The Epicodus TR-909 can be accessed through a webpage at (INSERT LINK)

Our git repository is also available at https://github.com/BrianHGrant/drum-machine

## Technologies Used
HTML5, CSS, JavaScript, jquery-3.0.0.js, bootstrap.css

## Contact
Feel free to contact us at:
(CONTACT INFO FOR EACH MEMBER IF YOU WANT)

## License
This software is licensed uner the MIT license
