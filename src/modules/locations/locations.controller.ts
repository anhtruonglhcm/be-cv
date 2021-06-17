import { Controller } from "@nestjs/common";
import { LocationsService } from "./locations.service";

@Controller()
export class LocationsController {
  constructor(private locationsService: LocationsService) {}
}
