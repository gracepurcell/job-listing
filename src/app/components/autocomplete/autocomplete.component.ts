import { SearchResults } from './../../services/dtos';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, OnDestroy {

  myControl = new FormControl<string | SearchResults>('');
  @Input() filteredOptions: SearchResults[] = [];
  @Input() label = '';

  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() makeJobSearch: EventEmitter<string> = new EventEmitter<string>();

  subChanges: Subscription;

  constructor() {
    this.myControl = new FormControl('');
    this.subChanges = this.myControl.valueChanges.subscribe(ok => {
      const value = this.myControl.value;
      this.inputChange.emit(value?.toString());
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subChanges) {
      this.subChanges.unsubscribe();
    }
  }


  displayFn(result: SearchResults): string {
    return result && result.name_display ? result.name_display : '';
  }

  selectOption(option: any) {
    if (option) {
      this.makeJobSearch.emit(option.name_display);
    }
  }

}
