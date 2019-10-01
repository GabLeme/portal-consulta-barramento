import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from 'src/services/commonservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalApiCliente: number = 0;
  mediaApiCliente: number = 0;
  totalApiParceiro: number = 0;
  mediaApiParceiro: number = 0;
  totalApiCrm: number = 0;
  mediaApiCrm: number = 0;
  totalApiEnergiaCompleta: number = 0;
  totalApiOscilacao: number = 0;
  totalApiNotaInformativa: number = 0;
  totalApiSegundaVia: number = 0;
  totalApiReligaComum: number = 0;
  totalApiReligaUrgente: number = 0;
  statusBarramento: string = '';
  empresas: Array<any>;
  empresaOperadora: string = '';
  today: Date = new Date();
  constructor(private CommonServicesService: CommonServicesService) { }

  ngOnInit() {
    this.empresas = [
      { value: '98', Label: 'Cemar' },
      { value: '95', label: 'Celpa' }
    ]
    setInterval(() => {
      this.testBus();

      // this.CommonServicesService.findAllLogsToday("getClientes").subscribe((r) => {
      //   let anterior = this.totalApiCliente;
      //   this.totalApiCliente = r[0].totalMensagens;
      //   this.mediaApiCliente = this.totalApiCliente - anterior;

      // })
      // this.CommonServicesService.findAllLogsToday("postWebhook").subscribe((r) => {
      //   let anterior = this.totalApiParceiro;
      //   this.totalApiParceiro = r[0].totalMensagens;
      //   this.mediaApiParceiro = this.totalApiParceiro - anterior;
      // })
      // this.CommonServicesService.findAllLogsToday("getContatos").subscribe((r) => {
      //   let anterior = this.totalApiCrm;
      //   this.totalApiCrm = r[0].totalMensagens;
      //   this.mediaApiCrm = this.totalApiCrm - anterior;
      // })
      this.CommonServicesService.findAllLogsToday("postFaltaEnergiaCompleta").subscribe((r) => {
        this.totalApiEnergiaCompleta = r[0].totalMensagens;
      })
      this.CommonServicesService.findAllLogsToday("postFaltaEnergiaOscilacao").subscribe((r) => {
        this.totalApiOscilacao = r[0].totalMensagens;
      })
      this.CommonServicesService.findAllLogsToday("postFaltaEnergiaNotaInformativa").subscribe((r) => {
        this.totalApiNotaInformativa = r[0].totalMensagens;
      })
      this.CommonServicesService.findAllLogsToday("getFatura").subscribe((r) => {
        this.totalApiSegundaVia = r[0].totalMensagens;
      })
      this.CommonServicesService.findAllLogsToday("postReligaComum").subscribe((r) => {
        this.totalApiReligaComum = r[0].totalMensagens;
      })
      this.CommonServicesService.findAllLogsToday("postReligaUrgente").subscribe((r) => {
        this.totalApiReligaUrgente = r[0].totalMensagens;
      })

    }, 10000)
  }

  async testBus() {
    const requestApi = await fetch('http://10.160.100.11:7801');
    if (requestApi.status != 404) this.statusBarramento = 'OFF'
    else this.statusBarramento = 'ON'
  }

}
