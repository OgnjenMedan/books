import { Component, OnInit } from '@angular/core';
import { AuditsService } from '../services/audits.service';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.css']
})
export class AuditsComponent implements OnInit {

  audits: any[] = [];
  constructor(private auditsService: AuditsService) { }

  ngOnInit(): void {
    this.auditsService.getAudits().subscribe((data: any[]) => {
      this.audits = data;
    });
  }

}
