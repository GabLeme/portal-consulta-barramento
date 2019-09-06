import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from 'src/services/commonservice.service';

export interface ApiCall {
  method: string;
  codigoTransacao: string;
  collection: string;
}

@Component({
  selector: 'app-consult-resource',
  templateUrl: './consult-resource.component.html',
  styleUrls: ['./consult-resource.component.scss']
})

export class ConsultResourceComponent implements OnInit {

  collections: Array<any>;
  methods: Array<any>;
  apiCall: ApiCall = {
    codigoTransacao: '',
    collection: '',
    method: ''
  }
  countClicks: number = 0;
  data: any = [];


  constructor(private CommonServicesService: CommonServicesService) { }

  ngOnInit() {
    this.collections = [
      { value: 'log', label: 'Log' },
      { value: 'failure', label: 'Failure' },
      { value: 'error', label: 'Error' },
    ]
    this.methods = [
      { value: 'POST', label: 'Saída' },
      { value: 'GET', label: 'Entrada' }
    ]
  }

  consultResourceLog(): void {
    this.CommonServicesService.findByCodTransacao(this.apiCall.method, this.apiCall.codigoTransacao, this.apiCall.collection).subscribe((r) => {
      this.data = r;
      this.countClicks++;
    }, (err) => {
      this.countClicks++;
      this.data = err;
    })
  }

}
