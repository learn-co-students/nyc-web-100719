class DepartmentsController < ApplicationController
  def index
    @departments = Department.all
  end

  def create
    @department = Department.create(dep_params)
    redirect_to department_path(@department)
  end

  def new
    @department = Department.new
  end

  def show
    @department = Department.find(params[:id])
  end

  def edit
    @department = Department.find(params[:id])
  end

  def update
    @department = Department.find(params[:id])
    @department.update(dep_params)
    redirect_to department_path(@department)
  end

  def delete
    @department = Department.find(params[:id])
    @department.destroy
    redirect_to departments_path
  end

  private

  def dep_params
    params.require(:department).permit(:name)
  end
end
