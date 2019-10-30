# Rails - Routes, Forms, and Params

### Learning Goals

* [ ] Create a new Rails application
* [ ] Describe similarities between Sinatra routing & Rails routing
* [ ] Create a controller
* [ ] Create actions/methods for a RESTful controller
* [ ] Create views
* [ ] Create a model
* [ ] Create routes
* [ ] Create a form using `form_for`
* [ ] Implement strong params

### Things You Should Bookmark

* [Rails Routing from the Outside In](https://guides.rubyonrails.org/routing.html)
* [Rails 5.1's form\_with vs. form\_tag vs. form\_for](https://m.patrikonrails.com/rails-5-1s-form-with-vs-old-form-helpers-3a5f72a8c78a)
* [Action View Form Helpers (using `form_with`)](https://guides.rubyonrails.org/form_helpers.html)
    * [form_with (ActionView::Helpers::FormHelper) - APIdock](https://apidock.com/rails/ActionView/Helpers/FormHelper/form_with) - `form_with` is the newer way to build forms in Rails; it can be used with an ActiveRecord model or without to make a generic form
* [Action View Form Helpers (using `form_for`)](https://guides.rubyonrails.org/v5.2/form_helpers.html)
    * [form_for (ActionView::Helpers::FormHelper) - APIdock](https://apidock.com/rails/ActionView/Helpers/FormHelper/form_for) - `form_for` is the older way of creating a form in Rails *with* an ActiveRecord model; it has been 'soft deprecated' and will be removed at some point in future versions of Rails
    * [form_tag (ActionView::Helpers::FormHelper) - APIdock](https://apidock.com/rails/ActionView/Helpers/FormTagHelper/form_tag) - `form_tag` is the older way of creating a generic form in Rails *without* an ActiveRecord model; it has been 'soft deprecated' and will be removed at some point in future versions of Rails
* [Strong Params](https://guides.rubyonrails.org/action_controller_overview.html#strong-parameters)