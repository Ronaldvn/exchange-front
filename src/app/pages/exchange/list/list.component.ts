import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Exchange } from '../../../interfaces/models';
import { ExchangeService } from '../../../core/services/exchange.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  public exchangeResults$!: Observable<Exchange[]>;
  public errorMessage!: string;

  constructor(private service: ExchangeService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.exchangeResults$ = this.service.getAll().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}
