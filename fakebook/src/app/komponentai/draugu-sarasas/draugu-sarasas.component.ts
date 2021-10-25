import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-draugu-sarasas',
  templateUrl: './draugu-sarasas.component.html',
  styleUrls: ['./draugu-sarasas.component.css']
})
export class DrauguSarasasComponent implements OnInit {
 
  searchText = "";
  varduMasyvas = [
    {vardas: 'Vinetu', pavarde: 'Indenas', nuotrauka: '../../../assets/avatarai/avatar1.png'},
    {vardas: 'Secherezada', pavarde: 'Naktinetoja', nuotrauka: '../../../assets/avatarai/avatar2.png'},
    {vardas: 'Donaldas', pavarde: 'Antinas', nuotrauka: '../../../assets/avatarai/avatar3.png'}, 
    {vardas: 'Mauglis', pavarde: 'Nugaletojas', nuotrauka: '../../../assets/avatarai/avatar4.png'},
    {vardas: 'Balu', pavarde: 'Rudoji', nuotrauka: '../../../assets/avatarai/avatar5.png'},
    {vardas: 'Gargamelijus', pavarde: 'Didzianosis', nuotrauka: '../../../assets/avatarai/avatar6.png'},
    {vardas: 'Tiesiog', pavarde: 'Tarzanas', nuotrauka: '../../../assets/avatarai/avatar7.png'},
    {vardas: 'Trecias', pavarde: 'Brolis Jonas', nuotrauka: '../../../assets/avatarai/avatar8.png'},
    {vardas: 'Krankliai', pavarde: 'Zalieji', nuotrauka: '../../../assets/avatarai/avatar9.png'},
    {vardas: 'Miskine', pavarde: 'Raudonoji Kepuraite', nuotrauka: '../../../assets/avatarai/avatar10.png'},
    {vardas: 'Vilkas', pavarde: 'Siaubunas', nuotrauka: '../../../assets/avatarai/avatar11.png'},
    {vardas: 'Dydisis', pavarde: 'Smurfas', nuotrauka: '../../../assets/avatarai/avatar1.png'},
    {vardas: 'Homeris', pavarde: 'Isskirtinasis', nuotrauka: '../../../assets/avatarai/avatar2.png'},
    {vardas: 'Mazapedis', pavarde: 'Sniegazmogis', nuotrauka: '../../../assets/avatarai/avatar3.png'},
    {vardas: 'Snieguole', pavarde: 'Juodoji', nuotrauka: '../../../assets/avatarai/avatar4.png'},
    {vardas: 'Srekas', pavarde: 'IR TASKAS', nuotrauka: '../../../assets/avatarai/avatar5.png'},
    {vardas: 'Mike', pavarde: 'Melagelis', nuotrauka: '../../../assets/avatarai/avatar6.png'},
    {vardas: 'Karlsonas', pavarde: 'Plonasis', nuotrauka: '../../../assets/avatarai/avatar7.png'},
    {vardas: 'PANELE', pavarde: 'FREKENBOK', nuotrauka: '../../../assets/avatarai/avatar8.png'},
    {vardas: 'Karaliene', pavarde: 'Pelene Trecioji', nuotrauka: '../../../assets/avatarai/avatar9.png'},
    {vardas: 'Gudragalvis', pavarde: 'Begalvis Slibinas', nuotrauka: '../../../assets/avatarai/avatar10.png'},
  ];

  constructor() { }
  
  ngOnInit(): void {
  }
  

}
