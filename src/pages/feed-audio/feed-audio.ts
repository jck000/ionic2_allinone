import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AudioData } from '../../providers/audio-data';

import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
/*
  Generated class for the FeedAudio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed-audio',
  templateUrl: 'feed-audio.html'
})
export class FeedAudioPage {

    searchTerm: string = '';
    items: any;
    searchControl: FormControl;
    searching: any = false;

  constructor(public navCtrl: NavController, public dataService: AudioData) {
    this.searchControl = new FormControl();
  }
  
  ionViewDidLoad() {
    this.setFilteredItems();
    
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        this.searching = false;
        this.setFilteredItems();
    });
  }
  
  setFilteredItems() {
  
    this.items = this.dataService.filterItems(this.searchTerm);
  }
  
  onSearchInput(){
        this.searching = true;
    }

}
