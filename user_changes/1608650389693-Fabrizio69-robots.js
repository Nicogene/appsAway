//Fabrizio69
//&<h3>Field changed in robot manager</h3><br><ul><li>ID: <ins>44</ins><ul><li>sub_serial_head: <b>061H</b></li><li>sub_serial_upper: <b>042U</b></li><li>sub_serial_hands_and_forearms: <b>046HF</b></li><li>sub_serial_lower: <b>041LW</b></li><li>sub_serial_legs: <b>042L</b></li><li>notes: <b>iCub2.7 with Harmonic drive replaced by Nidec</b></li></ul></li></ul>
db.robots.update ({id: 44},{$set: { sub_serial_head: "061H", sub_serial_upper: "042U", sub_serial_hands_and_forearms: "046HF", sub_serial_lower: "041LW", sub_serial_legs: "042L", notes: "iCub2.7 with Harmonic drive replaced by Nidec"}});
