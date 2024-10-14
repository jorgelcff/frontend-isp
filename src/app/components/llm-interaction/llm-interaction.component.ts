import { Component } from '@angular/core';
import { ArmasService } from '../../services/armas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-llm-interaction',
  templateUrl: './llm-interaction.component.html',
  styleUrls: ['./llm-interaction.component.scss'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class LLMInteractionComponent {
  question: string = '';
  answer: string = '';

  constructor(private armasService: ArmasService) {}

  submitQuestion() {
    // if (this.question) {
    //   this.armasService.askLLM(this.question).subscribe((response) => {
    //     this.answer = response.answer;
    //   });
    // }
  }
}
