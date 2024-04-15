import { Component } from '@angular/core';
import { Exchange } from '../../../interfaces/models';
import { ExchangeService } from '../../../core/services/exchange.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  exchange: Exchange = {
    amount: 100,
    originCurrency: 'USD',
    fateCurrency: 'PEN',
  };

  constructor(private service: ExchangeService) {}

  save(): void {
    this.service.save(this.exchange).subscribe({
      next: (res) => {
        this.exchange.exchangeRate = res.exchangeRate;
        this.exchange.amountWithExchange = res.amountWithExchange;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
