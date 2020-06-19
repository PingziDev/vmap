import Vue from 'vue'

export class UIComponent {
  static name: string

  static install<T> (vue: typeof Vue, options?: T): void
}

