import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draugu-sarasas',
  templateUrl: './draugu-sarasas.component.html',
  styleUrls: ['./draugu-sarasas.component.css']
})
export class DrauguSarasasComponent implements OnInit {

  varduMasyvas = [
    {vardas: 'Vinetu', pavarde: 'Indenas'},
    {vardas: 'Secherezada', pavarde: 'Naktinetoja'},
    {vardas: 'Donaldas', pavarde: 'Antinas'},
    {vardas: 'Mauglis', pavarde: 'Nugaletojas'},
    {vardas: 'Balu', pavarde: 'Rudoji'},
    {vardas: 'Gargamelijus', pavarde: 'Didzianosis'},
    {vardas: 'Tiesiog', pavarde: 'Tarzanas'},
    {vardas: 'Trecias', pavarde: 'Brolis Jonas'},
    {vardas: 'Krankliai', pavarde: 'Zalieji'},
    {vardas: 'Miskine', pavarde: 'Raudonoji Kepuraite'},
    {vardas: 'Vilkas', pavarde: 'Siaubunas'},
    {vardas: 'Dydisis', pavarde: 'Smurfas'},
    {vardas: 'Homeris', pavarde: 'Isskirtinasis'},
    {vardas: 'Mazapedis', pavarde: 'Sniegazmogis'},
    {vardas: 'Snieguole', pavarde: 'Juodoji'},
    {vardas: 'Srekas', pavarde: 'IR TASKAS'},
    {vardas: 'Mike', pavarde: 'Melagelis'},
    {vardas: 'Karlsonas', pavarde: 'Plonasis'},
    {vardas: 'PANELE', pavarde: 'FREKENBOK'},
    {vardas: 'Karaliene', pavarde: 'Pelene Trecioji'},
    {vardas: 'Gudragalvis', pavarde: 'Begalvis Slibinas'},
  ];

  constructor() { }
  
  ngOnInit(): void {
  }
  

}
