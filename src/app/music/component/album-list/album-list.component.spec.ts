import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlbumListComponent } from './album-list.component';

describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;
  const albumServiceSpy = jasmine.createSpyObj('AlbumService', {'albumsSubject': of([]) });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
