import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../../../shared/loading-spinner/loading-spinner.component';
import { environment } from '../../../../environments/environment';
import { ApiRequest, ApiService, Resource } from '../../../core/api.service';
import { ProjectsService } from '../../../core/projects.service';

@Component({
  selector: 'app-adminresources',
  imports: [SidebarComponent, LoadingSpinnerComponent, FormsModule],
  templateUrl: './adminresources.component.html',
  styleUrl: './adminresources.component.css'
})
export class AdminresourcesComponent implements OnInit {
  private resources: Array<Resource> = [];
  loading = true;
  creating = false;
  editResource!: Resource | null;
  user: string = "admin";
  password: string = "admin";

  constructor(private service: ProjectsService, private api: ApiService) {
  }

  ngOnInit(): void {
    this.update();
  }

  setResources(resources: Array<Resource>) {
    this.resources = resources;
    this.loading = false;
  }

  getResources(): Array<Resource> {
    return this.resources;
  }

  edit(resource: Resource) {
    if (this.editResource && this.editResource.id === resource.id) {
      this.editResource = null;
      return;
    }
    this.editResource = Object.assign({}, resource);
  }

  confirmEdit() {
    if (!this.editResource)
      return;
    const request: ApiRequest<Object> = {
      url: environment.resourcesUrl,
      method: 'put',
      content: this.editResource,
      user: this.user,
      password: this.password,
      on_respond: (res) => {
        this.update()
        this.editResource = null;
      },
      on_error(res) {
      },
    }
    this.api.call(request);
  }

  delete(id: number) {
    const request: ApiRequest<Object> = {
      url: `${environment.resourcesUrl}/${id}`,
      method: 'delete',
      user: this.user,
      password: this.password,
      on_respond: (res) => {
        this.update();
        this.editResource = null;
      },
      on_error: (res) => {}
    }
    this.api.call(request);
  }

  update() {
    this.service.loadResources((r) => this.setResources(r));
    this.loading = false
  }

  cancelEdit() {
    this.editResource = null;
  }

  toggleCreatePanel() {
    this.creating = !this.creating;
    if (this.creating) {
      this.editResource = {};
    } else {
      this.editResource = null;
    }
  }

  confirmCreate() {
    if (!this.creating || this.editResource == null)
      return
    const r = this.editResource;
    if (r.id != null ||
      this.isEmpty(r.title) ||
      this.isEmpty(r.description) ||
      this.isEmpty(r.link) ||
      this.isEmpty(r.image_url)
    ) {
      alert("Invalid resource; no field should be empty.")
      return
    }
    const request: ApiRequest<Object> = {
      url: `${environment.resourcesUrl}`,
      method: 'post',
      content: this.editResource,
      user: this.user,
      password: this.password,
      on_respond: (res) => {
        if (!res) {
          this.editResource = null;
          this.creating = false;
          this.update();
          return;
        }
      },
      on_error: (res) => alert("something was wrong, review the fields")
    }
    this.api.call(request);
  }

  isEmpty(field: string | null | undefined) {
    return field == undefined || field == null || field == ""
  }
}
