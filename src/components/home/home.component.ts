import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pageTitle = "Viral Products";

   shareNative() {
    if (navigator.share) {
      navigator.share({
        title: this.pageTitle,
        //text: decodeURIComponent(shareText),
        url: window.location.href
      })
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.log("Error sharing:", error));
    } else {
      this.copyToClipboard(window.location.href);
      alert("Link copied to clipboard! 📋");
    }
  }

   copyToClipboard(text : any) {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

  
}
