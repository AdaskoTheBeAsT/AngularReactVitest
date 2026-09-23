import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'adaskothebeast-anglib',
  imports: [],
  templateUrl: './anglib.component.html',
  // Preserve the change detection behavior from before Angular 22.
  // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './anglib.component.css',
})
export class AnglibComponent {}
