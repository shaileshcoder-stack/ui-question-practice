import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading = false;

  constructor(public loaderService: LoaderService) {
    this.loaderService.loading$.subscribe(
      (state) => (this.isLoading = state)
    );
   }

  ngOnInit(): void {
  }

}
