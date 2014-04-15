'use strict'

describe 'Directive: getSupported', () ->

  # load the directive's module
  beforeEach module '24bar7App'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<get-supported></get-supported>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the getSupported directive'
