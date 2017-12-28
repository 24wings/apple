import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**用于切换视图不同状态 */
enum Views {
  List = 1,
  UserDetail,
  CreateUser
}

interface FruiteSystemUser {
  nickname: string;
  username: string;
  password: string;
}
@Component({
  selector: 'app-fruit-user-manage',
  templateUrl: './fruit-user-manage.component.html',
  styleUrls: ['./fruit-user-manage.component.css']
})
export class FruitUserManageComponent implements OnInit {
  createNewUserFields: { key: string, label: string, value: any, controlType: string, validators?: Validators }[] = [
    { key: 'nickname', label: '昵称', value: '1234', controlType: 'text', validators: Validators.required },
    { key: 'username', label: '用户名', value: '', controlType: 'text', validators: Validators.required },
    { key: 'password', label: '密码', value: '', controlType: 'text', validators: Validators.required }
  ];

  createUserFormGroup: FormGroup //;= new FormGroup({ 'a': new FormControl('') });
  alerts: any[] = [];
  createUserDismissOnTimeout: number = 4000;
  Views = Views;
  state: Views = Views.List;



  selectedDeletedFruiteSystemUser: FruiteSystemUser;
  newFruiteSystemUser: FruiteSystemUser = {
    nickname: '',
    username: '',
    password: ''
  };
  @ViewChild('deleteUserTemplate') deleteUserTemplate: TemplateRef<any>;
  users: FruiteSystemUser[] = [{ nickname: "杨卓", username: '15920589594', password: '123' },
  { nickname: '杨杰', username: '13419597065', password: '123' }
  ];

  ngOnInit() {
    let group: any = {};
    // this.createUserFormGroup= 
    this.createNewUserFields.forEach(field => {
      console.log(field)
      group[field.key] = new FormControl(field.value || '', field.validators);
      // filed.key
    });
    this.createUserFormGroup = new FormGroup(group);
  }
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  confirmDeleteUserModel() {
    this.modalRef = this.modalService.show(this.deleteUserTemplate);
  }
  deleteFruiteSystemUser() {
    if (this.selectedDeletedFruiteSystemUser) {
      let i = this.users.findIndex(user => user == this.selectedDeletedFruiteSystemUser);
      this.users.splice(i, 1);
    }
  }
  resetCreateUser() {
    this.newFruiteSystemUser = { username: '', password: '', nickname: '' };
  }
  saveNewFruitUser() {
    if (!this.createUserFormGroup.invalid) {
      console.log(this.createUserFormGroup.value);
      this.users.push(this.createUserFormGroup.value);

      this.alerts.push({
        type: 'success',
        msg: `添加用户成功 ${new Date().toLocaleString()})`,
        timeout: 3000
      });
    }
  }
}
