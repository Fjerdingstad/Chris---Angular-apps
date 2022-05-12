import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Output()
  // font-awesome icons
  faPaintBrush = faPaintBrush;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private sharedService:SharedService) {}

  otherTheme : boolean = true;

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }


}

