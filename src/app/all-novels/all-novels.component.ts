import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-all-novels',
  templateUrl: './all-novels.component.html',
  styleUrls: ['./all-novels.component.css']
})
export class AllNovelsComponent {
  title='All Novels'

  hideSelectBar: boolean=true
}
