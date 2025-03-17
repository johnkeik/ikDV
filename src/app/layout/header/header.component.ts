import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private previousScrollPosition = window.scrollY;
  isNavbarVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > this.previousScrollPosition) {
      // Scrolling down
      this.isNavbarVisible = false;
    } else {
      // Scrolling up
      this.isNavbarVisible = true;
    }
    this.previousScrollPosition = currentScrollPosition;
  }

  handleContact() {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  }
}
