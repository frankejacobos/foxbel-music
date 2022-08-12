import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public rutaCargada: boolean;

  private subscription: Subscription;
  private titleSubscription: Subscription;

  constructor(
    private readonly router: Router,
    private readonly title: Title,
    private readonly meta: Meta
  ) {
    this.rutaCargada = false;
  }

  ngOnInit(): void {
    this.subscription = this.router.events
      .pipe(filter((evento) => evento instanceof NavigationEnd))
      .subscribe(() => {
        this.rutaCargada = true;
        this.subscription?.unsubscribe();
      });
    this.listenTitle();
  }

  private listenTitle(): void {
    this.titleSubscription = this.getDataRoute().subscribe((data: any) => {
      const titleText = data.title;
      const descriptionText = data.description;

      const metaTag: MetaDefinition = {
        name: 'description',
        content: descriptionText,
      };

      this.title.setTitle(titleText);
      this.meta.updateTag(metaTag);
    });
  }

  private getDataRoute() {
    return this.router.events.pipe(
      filter((evento) => evento instanceof ActivationEnd),
      filter((evento: any) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

  ngOnDestroy(): void {
    this.titleSubscription.unsubscribe();
  }
}
