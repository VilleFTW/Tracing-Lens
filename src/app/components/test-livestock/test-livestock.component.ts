import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livestock } from '../../model/livestock.model';

@Component({
  selector: 'app-test-livestock',
  templateUrl: './test-livestock.component.html',
  styleUrls: ['./test-livestock.component.scss'],
})
export class TestLivestockComponent implements OnInit {
  selectedSegment: string = 'productInformation';
  @Input() livestock: Livestock | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((response: any) => {
      console.log('LIVESTOCK FETCHING', response);
      this.livestock = response.livestock;
    });
  }

  segmentedChanged(event: any) {
    this.selectedSegment = event.target.value;
  }
}
