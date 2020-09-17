import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessSettingsComponent } from './business-settings/business-settings.component';
import { CommentHistoryComponent } from './comment-history/comment-history.component';
import { VerificationDocumentsComponent } from './verification-documents/verification-documents.component';



@NgModule({
  declarations: [BusinessSettingsComponent, CommentHistoryComponent, VerificationDocumentsComponent],
  imports: [
    CommonModule
  ]
})
export class BusinessUserSettingsModule { }
