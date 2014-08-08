class ProjectsController < ApplicationController
  def new
  	@project = Project.new
  end

  def create
  	@project = Project.new(project_params)

  	if @project.save
  		redirect_to root_path
  	else
  		:new
  	end
  end

  def show
  	@project = Project.find(params[:id])
  end

  private 

  def project_params
  	params.require(:project).permit(:name, :description, :link)
  end
end
